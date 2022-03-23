import React from "react";

function emi_calculator() {
  return (
    <div class="container p-4">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card card-body text-center mt-5">
            <h2 class="heading display pb-3">Annual Interest calculator</h2>
            <form id="loan-form">
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">BDT</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  placeholder="Loan amount"
                ></input>
              </div>
              <div class="form-group input-group p-4">
                <h4 class="heading display pb-3">Annual Interest 9%</h4>
              </div>
              <div class="form-group input-group">
                <input
                  type="number"
                  class="form-control"
                  id="years"
                  placeholder="Years To Repay"
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  class="btn btn-block btn-dark"
                  value="Calculate"
                ></input>
              </div>
            </form>

            <div id="loading">
              <img src="img/loading.gif" alt="" />
            </div>

            <div id="results" class="pt-4">
              <h5>Results</h5>
              <div class="form-group input-group">
                <div class="input-group-append">
                  <span class="input-group-text">Monthly Payment</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="monthly-payment"
                  disabled
                />
              </div>
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Total Payment</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="total-payment"
                  disabled
                />
              </div>
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Total Interest</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="total-interest"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default emi_calculator;
