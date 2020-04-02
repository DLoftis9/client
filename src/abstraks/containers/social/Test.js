import React from 'react';
import PropTypes from 'prop-types';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

import FormSign from '../../components/social/FormSign';

export default class Test extends React.PureComponent {
  state = {
    email: '',
    errors: [],
  };

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'test',
  };
  render() {
    const { context, containerName } = this.props;
    const { email, errors } = this.state;
    const authUser = context.authenticatedUser;
    const emailUser = context.authenticatedUser;
    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={authUser.username} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>test</h1>
              <p>{authUser.username}</p>
              <p>{emailUser.email}</p>
              <FormSign
                errors={errors}
                submit={this.submit}
                submitButtonText="Update"
                elements={() => (
                  <React.Fragment>
                    <div className="input_name">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.change}
                        placeholder="Email"
                      />
                    </div>
                  </React.Fragment>
                )}
              ></FormSign>
            </div>
          </div>
        </div>
      </>
    );
  }

  change = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    const { email } = this.state;

    // update email
    const user = {
      email,
    };

    context.data
      .editUserName(user)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          context.actions.updateEmail(email).then(() => {
            console.log('Updated email!');
            this.props.history.push('/test');
          });
        }
      })
      .catch(err => {
        console.log(err, 'catch method in test');
        this.props.history.push('/error');
      });
  };
}
