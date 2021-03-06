var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <li className="contactItem">
          <i className="fas fa-user-circle" />
          <p className="contactLabel">Imię: {this.props.item.firstName}</p>
          <p className="contactLabel">Nazwisko: {this.props.item.lastName}</p>
          <a className="contactEmail" href={"mailto:" + this.props.item.email}>{this.props.item.email}</a>
        </li>
      )
    }
  });
  