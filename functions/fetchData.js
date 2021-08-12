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

export async function getAllRoomIds() {
    const collectionRef = firestore.collection("Games");
    const snapshot = await collectionRef.get();
    console.log("docs", await snapshot.docs);
  
    const rooms=[];
    snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        rooms.push({
            params : { roomID: doc.id }
        })
    });

    console.log("rooms", rooms)
    return rooms;
}

export async function getRoomData(roomID = 0) {
    const docRef = firestore.collection("Games").doc(roomID);
    const snapshot = await docRef.get();
    console.log(docRef)
    console.log("docs", await snapshot.data());

    const roomData = {
        id: snapshot.id, 
        ...await snapshot.data()
    }

    console.log("RD", roomData)
    return roomData;
}