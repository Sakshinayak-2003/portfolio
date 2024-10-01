import List from "./List";
import Section from "./Section";
import { Award } from 'lucide-react';
const Extracuricular = () => {
    const curricularItems = ["Member at CSI", "participated in smart India Hackathon"];
    return (
        <Section icon={<Award />}
            sectionTitle="Extracurricular Activities" >
            <List items={curricularItems} />
        </Section>
    );
    
};
export default Extracuricular;