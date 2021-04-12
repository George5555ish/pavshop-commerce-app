import React from 'react'

const Reviews = () => {
    return (
        <div>
            <div class="row">
<div class="col-md-12">
  <div id="exTab5" class="mtb_30">
  
    <div class="tab-content ">
      
      <div class="tab-pane" id="2c">
        <form class="form-horizontal">
          <div id="review"></div>
          <h4 class="mt_20 mb_30">Write a review</h4>
          <div class="form-group required">
            <div class="col-sm-12" style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
              <label class="control-label" for="input-name">Your Name</label>
              <input name="name" value="" id="input-name" class="form-control" type="text"/>
            </div>
          </div>
          <div class="form-group required">
            <div class="col-sm-12" style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
              <label class="control-label" for="input-review">Your Review</label>
              <textarea name="text" rows="5" id="input-review" class="form-control"></textarea>
              <div class="help-block"><span class="text-danger">Note:</span> HTML is not translated!</div>
              <div class="col-sm-6">
                  <button class="btn" style={{cursor: 'pointer'}}>Submit</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    
    </div>
  </div>
</div>
</div>
        </div>
    )
}

export default Reviews
