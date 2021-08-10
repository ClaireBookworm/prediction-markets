export function getSimplifiedRoomData() {
    const rooms = [];

    //TODO: GET ALL ROOM IDS AND QUESTIONS FROM FIREBASE
    // looks like:
    /*db.collection("cities").where("capital", "==", true)
    .get() //check that this doesnt destroy our daily quota
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            rooms.push({
                    roomID: doc.id,
                    question: doc.get("Question")
            })
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/
    //return an object with id as key and question as value or something similar idk
    rooms.push({
        roomID: "test_game0",
        question: "y Hoppity This room is now my property"

    });

    rooms.push({
        roomID: "test_game1",
        question: "y Hoppity This room is now my property"

    });

    console.log("roomdata", rooms)
    return rooms;

}

export function getAllRoomIds() {
    const rooms = [];

    //TODO: GET ALL ROOM IDS AND QUESTIONS FROM FIREBASE
    // looks like:
    /*db.collection("cities").where("capital", "==", true)
    .get() //check that this doesnt destroy our daily quota
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            rooms.push({
                params: {
                    roomID: doc.id,
                    question: doc.get("Question")
                }
            })
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/
    //return an object with id as key and question as value or something similar idk
    rooms.push({
        params: {
            roomID: "test_game0",
        }
    });

    rooms.push({
        params: {
            roomID: "test_game1",
        }
    });

    console.log("rooms", rooms)
    return rooms;
}

export function getRoomData(roomID = 0) {
    //TODO: get data from firebase based on document id
    const roomData = {
        roomID: "test_game1",
        question: "y Hoppity This room is now my property"
    };
    return roomData;
}