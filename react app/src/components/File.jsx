import Input from "./Input"

export default function File(){
    return(
        <div class="file">
            <h2>Upload a File</h2>
            <Input label="Caption" placeholder="Accumsan elementum nunc quis in mi non vel malesuada."/>

        <label for="file">Choose image</label><br/>
       
        <input type="file" name="" id="file" placeholder="enter file" class="inputFile"/>
        <div class="imgFile">
        
        <label for="file"><img src="../../vector.png" alt="" /><br/>Choose image</label>
        </div>
        </div>
    )
}