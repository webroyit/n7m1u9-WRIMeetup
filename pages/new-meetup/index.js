import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// http://localhost:3000/new-meetup
function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return (
        <Layout>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Layout>
    )
}

export default NewMeetupPage;