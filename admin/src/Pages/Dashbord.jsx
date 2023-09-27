import React from 'react'

function Dashbord() {
  return (
    <div>{/* MENU SECTION END*/}
<div className="content-wrapper">
  <div className="container">
    <div className="row pad-botm">
      <div className="col-md-12">
        <h4 className="header-line">ADMIN DASHBOARD</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="alert alert-info back-widget-set text-center">
          <i className="fa fa-history fa-5x" />
          <h3>500+&nbsp; <i className="fa fa-dollar" /></h3>
          Amount Pending For Approval
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="alert alert-success back-widget-set text-center">
          <i className="fa fa-bars fa-5x" />
          <h3>300+ Tasks</h3>
          Pending For New Events
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="alert alert-warning back-widget-set text-center">
          <i className="fa fa-recycle fa-5x" />
          <h3>56+ Calls</h3>
          To Be Made For New Orders
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-6">
        <div className="alert alert-danger back-widget-set text-center">
          <i className="fa fa-briefcase fa-5x" />
          <h3>30+ Issues </h3>
          That Should Be Resolved Now
        </div>
      </div>
    </div>              
    <div className="row">
      <div className="col-md-8 col-sm-8 col-xs-12">
        <div id="carousel-example" className="carousel slide slide-bdr" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src="assets/img/1.jpg" alt />
            </div>
            <div className="item">
              <img src="assets/img/2.jpg" alt />
            </div>
            <div className="item">
              <img src="assets/img/3.jpg" alt />
            </div>
          </div>
          {/*INDICATORS*/}
          <ol className="carousel-indicators">
            <li data-target="#carousel-example" data-slide-to={0} className="active" />
            <li data-target="#carousel-example" data-slide-to={1} />
            <li data-target="#carousel-example" data-slide-to={2} />
          </ol>
          {/*PREVIUS-NEXT BUTTONS*/}
          <a className="left carousel-control" href="#carousel-example" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
          </a>
          <a className="right carousel-control" href="#carousel-example" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="panel panel-primary ">
          <div className="panel-heading">
            Recent Chat History
          </div>
          <div className="panel-body chat-widget-main">
            <div className="chat-widget-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor.
            </div>
            <div className="chat-widget-name-left">
              <img className="media-object img-circle img-left-chat" src="assets/img/user2.png" />
              <h4>  Amanna Seiar</h4>
              <h5>Time 2:00 pm at 25th july</h5>
            </div>
            <hr />
            <div className="chat-widget-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet.
            </div>
            <div className="chat-widget-name-right">
              <img className="media-object img-circle img-right-chat" src="assets/img/user2.png" />
              <h4>  Amanna Seiar</h4>
              <h5>Time 2:00 pm at 25th july</h5>
            </div>
            <hr />
            <div className="chat-widget-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet.
            </div>
            <div className="chat-widget-name-left">
              <img className="media-object img-circle img-left-chat" src="assets/img/user2.png" />
              <h4>  Amanna Seiar</h4>
              <h5>Time 2:00 pm at 25th july</h5>
            </div>
            <hr />
            <div className="chat-widget-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet.
            </div>
            <div className="chat-widget-name-right">
              <img className="media-object img-circle img-right-chat" src="assets/img/user2.png" />
              <h4>  Amanna Seiar</h4>
              <h5>Time 2:00 pm at 25th july</h5>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            Recent Users
          </div>
          <div className="panel-body text-center recent-users-sec">
            <img className="img-thumbnail" src="assets/img/user.gif" />
            <img className="img-thumbnail" src="assets/img/user2.png" />
            <img className="img-thumbnail" src="assets/img/user.gif" />
            <img className="img-thumbnail" src="assets/img/user2.png" />
            <img className="img-thumbnail" src="assets/img/user.gif" />
            <img className="img-thumbnail" src="assets/img/user2.png" />
            <img className="img-thumbnail" src="assets/img/user.gif" />
            <img className="img-thumbnail" src="assets/img/user2.png" />
            <img className="img-thumbnail" src="assets/img/user.gif" />
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-8 col-xs-12">
        <div className="panel panel-success">
          <div className="panel-heading">
            Responsive Table Example
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>User No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-sm-8 col-xs-12">
        <div className="panel panel-warning">
          <div className="panel-heading">
            Recent Comments
          </div>
          <div className="panel-body">
            <ul className="media-list">
              <li className="media">
                <a className="pull-left" href="#">
                  <img className="media-object img-circle img-comments" src="assets/img/user.gif" />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Lorem ipsum dolor sit amet</h4>
                  <p>
                    Donec sit amet ligula enim. Duis vel condimentum massa.
                    Maecenas eget congue dui
                    interdum nibh et, volutpat dolor.
                  </p>
                  {/* Nested media object */}
                  <div className="media">
                    <a className="pull-left" href="#">
                      <img className="media-object img-circle img-comments" src="assets/img/user2.png" />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">Nulla gravida vitae neque </h4>
                      Donec sit amet ligula enim. Duis vel condimentum massa.
                      Maecenas eget congue dui. Vestibulum et eros consectetur,
                      interdum nibh et, volutpat dolor.
                      {/* Nested media object */}
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle img-comments" src="assets/img/user.gif" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Donec sit amet ligula enim</h4>
                          Donec sit amet ligula enim. Duis vel condimentum massa.
                          Maecenas eget congue dui. Vestibulum et eros consectetur,
                          interdum nibh et, volutpat dolor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="alert alert-info text-center">
          <h3> IMPORTANT NOTICE</h3> 
          <hr />
          <i className="fa fa-warning fa-4x" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
            Lorem ipsum dolor sit amet.
          </p>
          <hr />
          <a href="#" className="btn btn-info">Read Full Detalis</a> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            Alerts Examples
          </div>
          <div className="panel-body">
            <h5><strong>Simple Alert</strong></h5>
            <div className="alert alert-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
            </div>
            Info: You can use other classes like <i>alert-success</i> , <i>alert-warning</i> &amp; <i>alert-danger</i> instead of <i>alert-info</i>
            <br />
            <h5><strong>Dismissable Alert</strong></h5>
            <div className="alert alert-success alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
            </div>
            Info: You can use other classes like <i>alert-info</i> , <i>alert-warning</i> &amp; <i>alert-danger</i> instead of <i>alert-success</i>
            <hr />
            <h5> <strong> ICON EXAMPLES </strong></h5>
            <i className="fa fa-briefcase " />
            <i className="fa fa-briefcase fa-2x" />
            <i className="fa fa-briefcase fa-3x" />
            <i className="fa fa-briefcase fa-4x" />
            <i className="fa fa-briefcase fa-5x" />
            <br />
            <br />
            <i className="fa fa-recycle " />
            <i className="fa fa-recycle fa-2x" />
            <i className="fa fa-recycle fa-3x" />
            <i className="fa fa-recycle fa-4x" />
            <i className="fa fa-recycle fa-5x" />
            <br />
            <p className="alert alert-warning">
              For more customization Of icons please visit website : fortawesome.github.io/Font-Awesome/icons/ or  <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Click here</a> . You will get all font-awesome icons and there classes there.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="panel panel-info">
          <div className="panel-heading">
            Compose a Message
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label>Enter Name</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Enter Email</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Enter Message</label>
                <input className="form-control" type="text" style={{minHeight: 100}} />
              </div>
              <div className="form-group">
                <label>Attach File </label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>For Role </label>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />Webmaster 
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />Admin
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />Employee
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />User
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-success">Send Message </button>
              <button type="reset" className="btn btn-primary">Reset Fields</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* CONTENT-WRAPPER SECTION END*/}
</div>
  )
}

export default Dashbord