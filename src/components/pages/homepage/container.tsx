import { connect } from 'react-redux'
import { HomepageComponent } from '.'

const mapStateToProps = () => ({})

const mapDispatchToProps = null

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomepageComponent)
