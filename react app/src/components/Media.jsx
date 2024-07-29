export default function Media(){
    return(
        <div class="media">
        <div>
        <h2>Schedule</h2>
        <div class="section">
        <img src="../../facebook.png" alt="" />
        <label for="fb">Facebook</label>
        </div>
        <input type="date" id="fb"/>
        <input type="time" id="fb"/><br />
        <div class="section">
        <img src="../../instagram.png" alt="" />
        <label for="ins">instagram</label>
        </div>
        <input type="date" id="ins"/>
        <input type="time" id="ins"/>
        </div>
        </div>
    )
}