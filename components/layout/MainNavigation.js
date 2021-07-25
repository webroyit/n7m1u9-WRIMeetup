import Link from 'next/link';
import classes from '../../styles/MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>WRI Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;