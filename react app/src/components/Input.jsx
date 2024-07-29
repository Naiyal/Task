export default function Input(props){
    return(
        <div>
            <label for={props.label}>{props.label}</label>
            <input type="text" name="" id={props.label} placeholder={props.placeholder} class="size-input" />
        </div>
    )
}