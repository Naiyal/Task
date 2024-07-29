import Input from './Input'
import InputBig from './InputBig'
import Select from './Select'
import Media from './Media'
import File from './File'


export default function App(){
    return(
        <div>
            <h1>Client Brief</h1>
            <div class="section">
            <div class="box"> 
                <Input label="Brand Name" placeholder="Accumsan elementum nunc quis in mi non vel malesuada."/>
                <Input label="Tagline/Slogan" placeholder="Specify any specific language or terms to avoid"/>
                <InputBig label="Description" placeholder="Enter Email Address"/>
                <Select/>
            </div>
            <div class="box"> 
            <Input label="History" placeholder="Describe your brand's personality in a few words (e.g., trustworthy, innovative, bold)."/>
            <InputBig label="Products/Services" placeholder="Enter Email Address"/>
            <InputBig label="Key Milestones" placeholder="Key Milestones"/>
            </div>
            </div>
            <div class="section">
            <Media/>
            <File/>
            </div>
        </div>
    )
}
