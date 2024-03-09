function HeadingBox(){
return <div>
    <div className="container">
  <div className="row">
    <div className="col-6">
        <input type='text' placeholder="Enter the Name"></input>
    </div>
    <div className="col-4">
        <input type='date'>

        </input>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-primary">Add</button>
    </div>
  </div>
</div>
</div>
}


export default HeadingBox;