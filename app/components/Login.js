var React = require("react");
var Login = React.createClass({
  render: function () {
    return React.createElement('div', {}, React.createElement('body', {
        'style': {
            backgroundColor: 'black',
            backgroundImage: 'url(\'nfl_bg.jpg\')',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'repeat-y'
        }
    }, React.createElement('div', { 'className': 'container' }, React.createElement('div', {
        'className': 'jumbotron',
        'style': {
            background: '#698b8c',
            opacity: '1.4',
            color: 'white'
        }
    }, React.createElement('h1', { 'className': 'text-center' }, React.createElement('strong', {}, 'Pig Skin Pickem'))), React.createElement('div', {
        'className': 'jumbotron',
        'style': {
            background: 'rgba(44, 48, 68, 0.94)',
            opacity: '1.4',
            color: 'white'
        }
    }, React.createElement('h2', { 'className': 'text-center' }, 'Pick Your Winning Teams for the Week'), React.createElement('h2', { 'className': 'text-center' }, 'Good Luck!!')), React.createElement('div', {
        'id': 'surveyButton',
        'style': {
            display: 'flex',
            justifyContent: 'center'
        }
    }, React.createElement('a', { 'href': './teams.html' }, React.createElement('button', {
        'style': {
            width: '300px',
            height: '80px',
            marginBottom: '20px',
            backgroundColor: '#212074',
            fontSize: '30px'
        },
        'type': 'button',
        'className': 'btn btn-primary btn-lg'
    }, 'Get Started'))))));
}

});
module.exports = Login;