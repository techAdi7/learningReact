function RowTwo() {
  let todo = "Buy Milk";
  let dateTwo = "4/10/2023";

  return (
    <div class="container text-center">
      <div class="row asRow">
        <div class="col-4">{todo}</div>
        <div class="col-4">{dateTwo}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger asbutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowTwo;
