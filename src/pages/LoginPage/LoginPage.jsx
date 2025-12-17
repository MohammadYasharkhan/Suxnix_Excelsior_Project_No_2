import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import { RegisterationCard } from '../SignUpPage/SignUpPage';
import './LoginPage.css';

function LoginPage()
{
    return <>
        <HeroWithHeading title={"Login"}></HeroWithHeading>
        <section id='login_section'>
            <RegisterationCard formType={"login"}></RegisterationCard>
        </section>
    </>
}   

export default LoginPage;