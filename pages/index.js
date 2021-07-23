import MeetupList from "../components/meetups/MeetupList";

const data = [
    {
        id: '1',
        title: 'Park Play',
        image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        address: 'Park St 123, 12345 Park City'
    },
    {
        id: '2',
        title: 'Park Play',
        image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        address: 'Park St 123, 12345 Park City'
    },
    {
        id: '3',
        title: 'Park Play',
        image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        address: 'Park St 123, 12345 Park City'
    }
];

// http://localhost:3000/
function HomePage() {
    return (
        <div>
            <MeetupList meetups={data} />
        </div>
    )
}

export default HomePage;