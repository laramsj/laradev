export default function validadeInfo(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = "Username required"
  }

  if (!values.email.trim()) {
    errors.email = "E-mail required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "E-mail address is invalid"
  }

  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more"
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Password is required"
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match!"
  } else if (values.passwordConfirm.length < 6) {
    errors.passwordConfirm = "Password needs to be 6 characters or more"
  }

  return errors;
}