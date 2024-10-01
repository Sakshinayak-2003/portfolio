import { User } from 'lucide-react';
import Section from './Section';

const Aboutme = () => {
    return (
        <Section icon={<User />} sectionTitle="AboutMe">
            <p>Hi, I’m [SAKSHI NAYAK], a passionate frontend developer with a love for creating engaging and user-friendly web experiences. I specialize in turning design ideas into functional, responsive websites using HTML, CSS, and JavaScript. My goal is to build clean, efficient code and make sure every project not only looks great but also works seamlessly on all devices</p>
        </Section>
    );
};
export default Aboutme;