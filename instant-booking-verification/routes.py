from app import *
from db_models import booking
from datetime import datetime, timedelta

@app.route("/",methods=['GET'])
def index():
    return "<h1> manage & booking views </h1>"



@app.route("/renter", methods=["POST"])
def create_booking():
    new_booking = request.json
    print(new_booking)
    result = mongo.db.booking.insert_one(new_booking)
    return jsonify({"id": str(result.inserted_id)})


# @app.route("/users", methods=["GET"])
# def get_users():
#     users = []
#     for user in mongo.db.users.find():
#         user["_id"] = str(user["_id"])
#         users.append(user)
#     return jsonify(users)


@app.route("/renter/recent_booking/<renter_id>", methods=["GET"])
def get_renter_recent(renter_id):
    today = datetime.now().strftime('%Y-%m-%d')
    recent = []

    # find all documents in myCollection with date field not greater than today
    for doc in mongo.db.booking.find({"check_out_date": {"$lte": today}}):
        doc["_id"] = str(doc["_id"])  # convert ObjectID to string
        #json_data = json.dumps(doc)
        recent.append(doc)
    #print(recent)

    return recent


    
@app.route("/renter/ongoing_booking/<renter_id>", methods=["GET"])
def get_renter_ongoing(renter_id):
    tommorow = ''
    today = datetime.now().strftime('%Y-%m-%d')
    ongoing = []

    # find all documents in myCollection with date field not greater than today
    for doc in mongo.db.booking.find({"check_in_date": {"$gte": today}}):
        doc["_id"] = str(doc["_id"])  # convert ObjectID to string
        #json_data = json.dumps(doc)
        ongoing.append(doc)
    #print(ongoing)

    return ongoing













    # @app.route("/renter/<renter_id>", methods=["GET"])
# def get_user(renter_id):
#     booker = mongo.db.booking.find_one({"_id": ObjectId(renter_id)})
#     if not user:
#         return jsonify({"error": "User not found"})
#     booker["_id"] = str(booker["_id"])
#     return jsonify(booker)




# @app.route("/renter/recent_booking/<renter_id>", methods=["GET"])
# def get_user(renter_id):
#     today - ''
#     booker = mongo.db.booking.find_one({"check_out_date": today})
#     if not booker:
#         return jsonify({"error": "User not found"})
#     booker["_id"] = str(booker["_id"])
#     return jsonify(booker)