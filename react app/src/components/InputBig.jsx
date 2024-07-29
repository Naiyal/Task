export default function InputBig(props){
    return(
        <div>
            <label for={props.label}>{props.label}</label>
            <input type="text" name="" id={props.label} placeholder={props.placeholder} class="big-input" />
        </div>
    )
}