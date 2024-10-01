import List from "./List";
import Section from "./Section";
import {Heart } from 'lucide-react';
const Hobbies = () => {
    const hobbies = ["cooking", "playing badminton", "photography","Listening to music","watching movies"];
    return <Section icon={<Heart />}
        sectionTitle="Hobbies and interests">
        <List items={hobbies}/>
        </Section>
    
}
export default Hobbies;