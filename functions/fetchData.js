import { firestore } from "../.env/firebaseConfig";

export async function getSimplifiedRoomData() {
    const snapshot = await firestore.collection("Games").get();
    console.log(await snapshot)
    const rooms = await snapshot.forEach((doc) => {
        console.log("q snapshot", doc.data())
        // doc.data() is never undefined for query doc snapshots
        let temp = {
            roomID: doc.id,
            question: doc.get("Question")
        };
        console.log(temp)
        return temp;
    })

    //console.log("roomdata", rooms)
    return rooms;

}

export function getAllRoomIds() {
    const rooms = [];
    firestore.collection("Games")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("id", doc.id)
                // doc.data() is never undefined for query doc snapshots
                rooms.push({
                    roomID: doc.id,
                })
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
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