import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// http://localhost:3000/new-meetup
function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;