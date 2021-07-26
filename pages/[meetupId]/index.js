import Layout from "../../components/layout/Layout";
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <Layout>
            <MeetupDetail
                images='https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                title='Park Play'
                address='Park St 123, 12345 Park City'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, repellendus laudantium autem dolor aspernatur hic architecto ullam. Officiis architecto id beatae natus. Ullam recusandae maxime culpa sed molestiae? Nesciunt, temporibus.' />
        </Layout>
    )
}

export default MeetupDetails;
