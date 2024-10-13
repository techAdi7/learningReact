function RowOne() {
  return (
    <div class="container text-center">
      <div class="row asRow">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success asbutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowOne;