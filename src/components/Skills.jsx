import Pills from "./Pills";
import Section from "./Section";
import { Code } from 'lucide-react';
const Skills = () => {
    const skillTitles = ["Html","CSS","javascript","React", "Mongodb", "SQL",, "Github"];  
    return <Section icon={<Code />} sectionTitle="Skills">
        {skillTitles.map(title => <Pills title={title}/>
)}
       
        </Section>
    
}
export default Skills;