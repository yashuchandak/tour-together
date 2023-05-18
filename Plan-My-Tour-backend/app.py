from flask import Flask, request
from flask_cors import CORS

import mysql.connector as connector
from datetime import date

todays_date = date.today()

app = Flask(__name__)
CORS(app)


def openconnection():
    db = connector.connect(host = "localhost", user = "root", password = "Mysqlroot", database = "planMyTour")

    command_handler = db.cursor(buffered=True)

    return command_handler, db

def closeconnection(command_handler):
    command_handler.close()
 #If buffered is True, the cursor fetches all rows from the server after an operation is executed

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        binaryData = file.read()
    return binaryData


@app.route("/login", methods=["POST"])
def login():
    command_handler, db = openconnection()
    jsondata = request.get_json()
    emailid = jsondata['email']
    password = jsondata['password']
    command_handler.execute("SELECT id, username FROM cred where emailid=%s and password=%s", (emailid, password,))
    found = command_handler.fetchone()
    
    closeconnection(command_handler)
    
    if not found:
        return {"id":-1, "username":"", "message":"Incorrect username or password"}
    else:
        ret = {"id":found[0], "username":found[1],"message":"Correct credentials"}
        return ret # front end ne user 

@app.route("/register", methods=["POST"])
def signup():

    command_handler, db = openconnection()

    jsondata = request.get_json()
    username = jsondata['username']
    emailid = jsondata['email']
    password = jsondata['password']
    print(username,emailid,password)
    command_handler.execute("SELECT username FROM cred WHERE username=%s", (username,))
    found = command_handler.fetchone()
    if(found):
        ret={"id":-1,"username":"","message":"Username already taken"}
        return ret
    
    command_handler.execute("SELECT username FROM cred WHERE emailid=%s", (emailid,))
    found = command_handler.fetchone()
    
    if(found):
        ret={"id":-1, "username":"", "message":"already registered with this email-id"}
        return ret
    
    command_handler.execute("INSERT INTO cred (username, emailid, password, photo) VALUES (%s, %s, %s, %s)", (username, emailid, password, convertToBinaryData('temp_upload.png')))
    db.commit()
    
    command_handler.execute("SELECT id FROM cred WHERE username=%s", (username,))
    id=command_handler.fetchone()
    id = id[0]
    
    ret = {"id":id, "username":username, "message":"Correct credentials"}

    closeconnection(command_handler)

    return ret #iske liye ek session aur session me save? backend pe ya front end pe?

#search plans
@app.route("/viewplans/<tour_place>", methods=["GET"])
def viewplans(tour_place):
    command_handler, db = openconnection()
    command_handler.execute("SELECT * FROM plans WHERE tour_place LIKE '%{}%'".format(tour_place))
    found = command_handler.fetchall()
    closeconnection(command_handler)

    lis = ["plan_id", "user_id", "username", "start_place", "tour_place", "travel_means", "likes", "tour_duration", "details", "advice", "cost_per_person", "date"]
    
    plans = []
    for i in range(len(found)):
        plan = {}
        for j in range(len(lis)):
            plan[lis[j]] = found[i][j]
        plans.append(plan)
    
    return plans

def convert(list):
    return tuple(i for i in list)

#share plan
@app.route("/newplan", methods=["POST"])
def saveplan():
    jsondata = request.get_json()
    lis = ["user_id","username","start_place", "tour_place", "travel_means","likes","tour_duration", "details", "advice", "cost_per_person"] #8
    data=[]
    for i in lis:
        data.append(jsondata[i])
    data.append(todays_date)

    command_handler, db = openconnection()
    command_handler.execute("INSERT INTO plans (user_id,username,start_place,tour_place,travel_means,likes,tour_duration,details,advice,cost_per_person,date) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", convert(data))
    db.commit()
    closeconnection(command_handler)

    return "1" #The return type must be a string, dict, list, tuple with headers or status, Response instance, or WSGI callable, but it was a int.


@app.route("/plans/updateLike",methods=["PUT"])
def increamentLikes():
    jsondata=request.get_json()
    like=int(jsondata['likes'])
    like=like+1

    command_handler, db = openconnection()

    command_handler.execute("UPDATE plans set likes=%s where plan_id=%s ",(str(like),jsondata['id']))
    db.commit()

    closeconnection(command_handler)

    return str(like)


@app.route("/myContributions/<userId>",methods=["GET"])
def myContributions(userId):
    command_handler, db = openconnection()
    command_handler.execute("SELECT * from plans where user_id=%s",(userId,))

    found = command_handler.fetchall()

    lis = ["plan_id", "user_id", "username", "start_place", "tour_place", "travel_means", "likes", "tour_duration", "details", "advice", "cost_per_person", "date"]
    
    myplans = []
    for i in range(len(found)):
        plan = {}
        for j in range(len(lis)):
            plan[lis[j]] = found[i][j]
        myplans.append(plan)
    
    return myplans

@app.route("/addguide",methods=["POST"])
def addGuide():
    jsondata=request.get_json()
    list=["id","username","name","mobile","city","languages","insta_username","fees"]
    command_handler, db = openconnection()
    command_handler.execute("INSERT INTO guides VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(
        jsondata["id"],jsondata["username"],jsondata["name"],jsondata["mobile"],
        jsondata["city"],jsondata["languages"],jsondata["insta_username"],jsondata["fees"]
    ))
    db.commit()
    closeconnection(command_handler)
    return "1"

#view guides
@app.route("/viewguides/<tour_place>", methods=["GET"])
def viewguides(tour_place):

    command_handler, db = openconnection()
    command_handler.execute("SELECT * FROM guides WHERE city LIKE '%{}%'".format(tour_place))
    found = command_handler.fetchall()
    closeconnection(command_handler)
    lis = ["id", "username", "name", "mobile", "city", "languages", "insta_username", "fees"]
    
    guides = []
    for i in range(len(found)):
        guide = {}
        for j in range(len(lis)):
            guide[lis[j]] = found[i][j]
        guides.append(guide)
    
    return guides


app.run(host = "localhost", port = 5000, debug=True)
