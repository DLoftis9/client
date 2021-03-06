import React from 'react';
import { Route, Switch } from 'react-router-dom';

// App Containers
import Publication from './Publication';
import About from './About';
import Contact from './Contact';
import TermsOfUse from './TermsOfUse';

// Socinet Containers
import SignUp from './socinet/SignUp';
import SignIn from './socinet/SignIn';

// Social Containers
import NotFound from './social/NotFound';
import Test from './social/Test';

import CreatePost from './social/CreatePost';
import SinglePost from './social/SinglePost';
import HomeFeed from './social/HomeFeed';
import Tools from './social/Tools';
import EditPost from './social/EditPost';
import EditProfile from './social/EditProfile';
import Following from './social/Following';
import Profile from './social/Profile';
import Settings from './social/Settings';
import Discover from './social/Discover';
import Terms from './social/Terms';
import PrivacyPolicy from './social/PrivacyPolicy';
import Users from './social/Users';
import FindUsers from './social/FindUsers';
import ForgotPassword from './social/ForgotPassword';
import ResetPassword from './social/ResetPassword';

// Social Components
import HeaderSocial from '../components/social/HeaderSocial';
import MobileFooter from '../components/social/MobileFooter';
import UserSignOut from '../components/social/UserSignOut';

// Social Base
import withContext from '../../base/social/utils/Context';
import PrivateRoute from '../../base/social/components/PrivateRoute';

// issue 26 pages
import Issue26p1 from '../components/publication-pages/Issue26p1';
import Issue26p2 from '../components/publication-pages/Issue26p2';
import Issue26p3 from '../components/publication-pages/Issue26p3';
import Issue26p4 from '../components/publication-pages/Issue26p4';
import Issue26p5 from '../components/publication-pages/Issue26p5';
import Issue26p6 from '../components/publication-pages/Issue26p6';
import Issue26p7 from '../components/publication-pages/Issue26p7';
import Issue26p8 from '../components/publication-pages/Issue26p8';
import Issue26p9 from '../components/publication-pages/Issue26p9';
import Issue26p10 from '../components/publication-pages/Issue26p10';
import Issue26p11 from '../components/publication-pages/Issue26p11';
import Issue26p12 from '../components/publication-pages/Issue26p12';
import Issue26p13 from '../components/publication-pages/Issue26p13';
import Issue26p14 from '../components/publication-pages/Issue26p14';
import Issue26p15 from '../components/publication-pages/Issue26p15';
import Issue26p16 from '../components/publication-pages/Issue26p16';
import Issue26p17 from '../components/publication-pages/Issue26p17';
import Issue26p18 from '../components/publication-pages/Issue26p18';
import Issue26p19 from '../components/publication-pages/Issue26p19';
import Issue26p20 from '../components/publication-pages/Issue26p20';
import Issue26p21 from '../components/publication-pages/Issue26p21';
import Issue26p22 from '../components/publication-pages/Issue26p22';
import Issue26p23 from '../components/publication-pages/Issue26p23';
import Issue26p24 from '../components/publication-pages/Issue26p24';
import Issue26p25 from '../components/publication-pages/Issue26p25';
import Issue26p26 from '../components/publication-pages/Issue26p26';
import Issue26p27 from '../components/publication-pages/Issue26p27';
import Issue26p28 from '../components/publication-pages/Issue26p28';
import Issue26p29 from '../components/publication-pages/Issue26p29';
import Issue26p30 from '../components/publication-pages/Issue26p30';
import Issue26p31 from '../components/publication-pages/Issue26p31';
import Issue26p32 from '../components/publication-pages/Issue26p32';
import Issue26p33 from '../components/publication-pages/Issue26p33';
import Issue26p34 from '../components/publication-pages/Issue26p34';
import Issue26p35 from '../components/publication-pages/Issue26p35';
import Issue26p36 from '../components/publication-pages/Issue26p36';
import Issue26p37 from '../components/publication-pages/Issue26p37';
import Issue26p38 from '../components/publication-pages/Issue26p38';
import Issue26p39 from '../components/publication-pages/Issue26p39';
import Issue26p40 from '../components/publication-pages/Issue26p40';
import Issue26p41 from '../components/publication-pages/Issue26p41';
import Issue26p42 from '../components/publication-pages/Issue26p42';
import Issue26p43 from '../components/publication-pages/Issue26p43';
import Issue26p44 from '../components/publication-pages/Issue26p44';

// issue 27 pages
import Issue27p1 from '../components/publication-pages/Issue27p1';
import Issue27p2 from '../components/publication-pages/Issue27p2';
import Issue27p3 from '../components/publication-pages/Issue27p3';
import Issue27p4 from '../components/publication-pages/Issue27p4';
import Issue27p5 from '../components/publication-pages/Issue27p5';
import Issue27p6 from '../components/publication-pages/Issue27p6';
import Issue27p7 from '../components/publication-pages/Issue27p7';
import Issue27p8 from '../components/publication-pages/Issue27p8';
import Issue27p9 from '../components/publication-pages/Issue27p9';
import Issue27p10 from '../components/publication-pages/Issue27p10';
import Issue27p11 from '../components/publication-pages/Issue27p11';
import Issue27p12 from '../components/publication-pages/Issue27p12';
import Issue27p13 from '../components/publication-pages/Issue27p13';
import Issue27p14 from '../components/publication-pages/Issue27p14';
import Issue27p15 from '../components/publication-pages/Issue27p15';
import Issue27p16 from '../components/publication-pages/Issue27p16';
import Issue27p17 from '../components/publication-pages/Issue27p17';
import Issue27p18 from '../components/publication-pages/Issue27p18';
import Issue27p19 from '../components/publication-pages/Issue27p19';
import Issue27p20 from '../components/publication-pages/Issue27p20';
import Issue27p21 from '../components/publication-pages/Issue27p21';
import Issue27p22 from '../components/publication-pages/Issue27p22';
import Issue27p23 from '../components/publication-pages/Issue27p23';
import Issue27p24 from '../components/publication-pages/Issue27p24';
import Issue27p25 from '../components/publication-pages/Issue27p25';
import Issue27p26 from '../components/publication-pages/Issue27p26';
import Issue27p27 from '../components/publication-pages/Issue27p27';
import Issue27p28 from '../components/publication-pages/Issue27p28';
import Issue27p29 from '../components/publication-pages/Issue27p29';
import Issue27p30 from '../components/publication-pages/Issue27p30';
import Issue27p31 from '../components/publication-pages/Issue27p31';
import Issue27p32 from '../components/publication-pages/Issue27p32';

// issue 28 pages
import Issue28p1 from '../components/publication-pages/Issue28p1';
import Issue28p2 from '../components/publication-pages/Issue28p2';
import Issue28p3 from '../components/publication-pages/Issue28p3';
import Issue28p4 from '../components/publication-pages/Issue28p4';
import Issue28p5 from '../components/publication-pages/Issue28p5';
import Issue28p6 from '../components/publication-pages/Issue28p6';
import Issue28p7 from '../components/publication-pages/Issue28p7';
import Issue28p8 from '../components/publication-pages/Issue28p8';
import Issue28p9 from '../components/publication-pages/Issue28p9';
import Issue28p10 from '../components/publication-pages/Issue28p10';
import Issue28p11 from '../components/publication-pages/Issue28p11';
import Issue28p12 from '../components/publication-pages/Issue28p12';
import Issue28p13 from '../components/publication-pages/Issue28p13';
import Issue28p14 from '../components/publication-pages/Issue28p14';
import Issue28p15 from '../components/publication-pages/Issue28p15';
import Issue28p16 from '../components/publication-pages/Issue28p16';
import Issue28p17 from '../components/publication-pages/Issue28p17';
import Issue28p18 from '../components/publication-pages/Issue28p18';
import Issue28p19 from '../components/publication-pages/Issue28p19';
import Issue28p20 from '../components/publication-pages/Issue28p20';
import Issue28p21 from '../components/publication-pages/Issue28p21';
import Issue28p22 from '../components/publication-pages/Issue28p22';
import Issue28p23 from '../components/publication-pages/Issue28p23';
import Issue28p24 from '../components/publication-pages/Issue28p24';
import Issue28p25 from '../components/publication-pages/Issue28p25';
import Issue28p26 from '../components/publication-pages/Issue28p26';
import Issue28p27 from '../components/publication-pages/Issue28p27';
import Issue28p28 from '../components/publication-pages/Issue28p28';
import Issue28p29 from '../components/publication-pages/Issue28p29';
import Issue28p30 from '../components/publication-pages/Issue28p30';
import Issue28p31 from '../components/publication-pages/Issue28p31';
import Issue28p32 from '../components/publication-pages/Issue28p32';
import Issue28p33 from '../components/publication-pages/Issue28p33';
import Issue28p34 from '../components/publication-pages/Issue28p34';
import Issue28p35 from '../components/publication-pages/Issue28p35';
import Issue28p36 from '../components/publication-pages/Issue28p36';
import Issue28p37 from '../components/publication-pages/Issue28p37';

// issue 29 pages
import Issue29p1 from '../components/publication-pages/Issue29p1';
import Issue29p2 from '../components/publication-pages/Issue29p2';
import Issue29p3 from '../components/publication-pages/Issue29p3';
import Issue29p4 from '../components/publication-pages/Issue29p4';
import Issue29p5 from '../components/publication-pages/Issue29p5';
import Issue29p6 from '../components/publication-pages/Issue29p6';
import Issue29p7 from '../components/publication-pages/Issue29p7';
import Issue29p8 from '../components/publication-pages/Issue29p8';
import Issue29p9 from '../components/publication-pages/Issue29p9';
import Issue29p10 from '../components/publication-pages/Issue29p10';
import Issue29p11 from '../components/publication-pages/Issue29p11';
import Issue29p12 from '../components/publication-pages/Issue29p12';
import Issue29p13 from '../components/publication-pages/Issue29p13';
import Issue29p14 from '../components/publication-pages/Issue29p14';
import Issue29p15 from '../components/publication-pages/Issue29p15';
import Issue29p16 from '../components/publication-pages/Issue29p16';
import Issue29p17 from '../components/publication-pages/Issue29p17';
import Issue29p18 from '../components/publication-pages/Issue29p18';
import Issue29p19 from '../components/publication-pages/Issue29p19';
import Issue29p20 from '../components/publication-pages/Issue29p20';
import Issue29p21 from '../components/publication-pages/Issue29p21';
import Issue29p22 from '../components/publication-pages/Issue29p22';
import Issue29p23 from '../components/publication-pages/Issue29p23';
import Issue29p24 from '../components/publication-pages/Issue29p24';

// Subscribing (connecting) the components to context – the data and
// actions are shared throughout the component tree
const HeaderWithContext = withContext(HeaderSocial);
const MobileFooterWithContext = withContext(MobileFooter);

const CreatePostWithContext = withContext(CreatePost);
const SinglePostWithContext = withContext(SinglePost);
const HomeFeedWithContext = withContext(HomeFeed);
const ToolsWithContext = withContext(Tools);
const EditPostWithContext = withContext(EditPost);
const EditProfileWithContext = withContext(EditProfile);
const FollowingWithContext = withContext(Following);
const ProfileWithContext = withContext(Profile);
const SettingsWithContext = withContext(Settings);
const DiscoverWithContext = withContext(Discover);
const TermsWithContext = withContext(Terms);
const PrivacyPolicyWithContext = withContext(PrivacyPolicy);
const UsersWithContext = withContext(Users);
const FindUsersWithContext = withContext(FindUsers);
const TestWithContext = withContext(Test);

// socinet containers and components
const SignUpWithContext = withContext(SignUp);
const SignInWithContext = withContext(SignIn);

// This subscribes the UserSignOut component to context changes, that
// way it'll be able to reference the signOut action (which calls the
// signOut function) from within the component.
const UserSignOutWithContext = withContext(UserSignOut);

const RouterContent = () => (
  <div className="app__container">
    {/* The Header component needs to be subscribed to the context 
    changes provided by Context.js. The data passed to Header will 
    determine whether it renders the "Welcome" message displaying 
    the user's name, or the "Sign In" and "Sign Up" links displayed 
    by default. */}
    <HeaderWithContext />

    <Switch>
      <Route exact path="/" component={Publication} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/termsOfuse" component={TermsOfUse} />

      {/* social container */}
      {/* When React renders a component that subscribes to context, 
      it will read the context value passed to it from its Provider. */}

      {/* Socinet Routes */}
      <Route path="/test" component={TestWithContext} />
      <Route exact path="/home" component={HomeFeedWithContext} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
      <Route exact path="/post/:postId" component={SinglePostWithContext} />

      <PrivateRoute exact path="/user/:userId" component={ProfileWithContext} />
      <PrivateRoute exact path="/createpost" component={CreatePostWithContext} />
      <PrivateRoute exact path="/post/edit/:postId" component={EditPostWithContext} />
      <PrivateRoute exact path="/editprofile/:userId" component={EditProfileWithContext} />
      <PrivateRoute exact path="/find-users" component={FindUsersWithContext} />

      <Route exact path="/tools" component={ToolsWithContext} />
      <Route exact path="/following" component={FollowingWithContext} />
      <Route exact path="/settings" component={SettingsWithContext} />
      <Route exact path="/discover" component={DiscoverWithContext} />
      <Route exact path="/terms-of-use" component={TermsWithContext} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyWithContext} />

      {/* route to return ALL users */}
      <Route exact path="/users" component={UsersWithContext} />

      <Route exact path="/signup" component={SignUpWithContext} />
      <Route exact path="/signin" component={SignInWithContext} />
      <Route exact path="/signout" component={UserSignOutWithContext} />
      {/* Socionet Routes END */}

      <Route path="/Publication/issue26p1" component={Issue26p1} />
      <Route path="/Publication/issue26p2" component={Issue26p2} />
      <Route path="/Publication/issue26p3" component={Issue26p3} />
      <Route path="/Publication/issue26p4" component={Issue26p4} />
      <Route path="/Publication/issue26p5" component={Issue26p5} />
      <Route path="/Publication/issue26p6" component={Issue26p6} />
      <Route path="/Publication/issue26p7" component={Issue26p7} />
      <Route path="/Publication/issue26p8" component={Issue26p8} />
      <Route path="/Publication/issue26p9" component={Issue26p9} />
      <Route path="/Publication/issue26p10" component={Issue26p10} />
      <Route path="/Publication/issue26p11" component={Issue26p11} />
      <Route path="/Publication/issue26p12" component={Issue26p12} />
      <Route path="/Publication/issue26p13" component={Issue26p13} />
      <Route path="/Publication/issue26p14" component={Issue26p14} />
      <Route path="/Publication/issue26p15" component={Issue26p15} />
      <Route path="/Publication/issue26p16" component={Issue26p16} />
      <Route path="/Publication/issue26p17" component={Issue26p17} />
      <Route path="/Publication/issue26p18" component={Issue26p18} />
      <Route path="/Publication/issue26p19" component={Issue26p19} />
      <Route path="/Publication/issue26p20" component={Issue26p20} />
      <Route path="/Publication/issue26p21" component={Issue26p21} />
      <Route path="/Publication/issue26p22" component={Issue26p22} />
      <Route path="/Publication/issue26p23" component={Issue26p23} />
      <Route path="/Publication/issue26p24" component={Issue26p24} />
      <Route path="/Publication/issue26p25" component={Issue26p25} />
      <Route path="/Publication/issue26p26" component={Issue26p26} />
      <Route path="/Publication/issue26p27" component={Issue26p27} />
      <Route path="/Publication/issue26p28" component={Issue26p28} />
      <Route path="/Publication/issue26p29" component={Issue26p29} />
      <Route path="/Publication/issue26p30" component={Issue26p30} />
      <Route path="/Publication/issue26p31" component={Issue26p31} />
      <Route path="/Publication/issue26p32" component={Issue26p32} />
      <Route path="/Publication/issue26p33" component={Issue26p33} />
      <Route path="/Publication/issue26p34" component={Issue26p34} />
      <Route path="/Publication/issue26p35" component={Issue26p35} />
      <Route path="/Publication/issue26p36" component={Issue26p36} />
      <Route path="/Publication/issue26p37" component={Issue26p37} />
      <Route path="/Publication/issue26p38" component={Issue26p38} />
      <Route path="/Publication/issue26p39" component={Issue26p39} />
      <Route path="/Publication/issue26p40" component={Issue26p40} />
      <Route path="/Publication/issue26p41" component={Issue26p41} />
      <Route path="/Publication/issue26p42" component={Issue26p42} />
      <Route path="/Publication/issue26p43" component={Issue26p43} />
      <Route path="/Publication/issue26p44" component={Issue26p44} />

      <Route path="/Publication/issue27p1" component={Issue27p1} />
      <Route path="/Publication/issue27p2" component={Issue27p2} />
      <Route path="/Publication/issue27p3" component={Issue27p3} />
      <Route path="/Publication/issue27p4" component={Issue27p4} />
      <Route path="/Publication/issue27p5" component={Issue27p5} />
      <Route path="/Publication/issue27p6" component={Issue27p6} />
      <Route path="/Publication/issue27p7" component={Issue27p7} />
      <Route path="/Publication/issue27p8" component={Issue27p8} />
      <Route path="/Publication/issue27p9" component={Issue27p9} />
      <Route path="/Publication/issue27p10" component={Issue27p10} />
      <Route path="/Publication/issue27p11" component={Issue27p11} />
      <Route path="/Publication/issue27p12" component={Issue27p12} />
      <Route path="/Publication/issue27p13" component={Issue27p13} />
      <Route path="/Publication/issue27p14" component={Issue27p14} />
      <Route path="/Publication/issue27p15" component={Issue27p15} />
      <Route path="/Publication/issue27p16" component={Issue27p16} />
      <Route path="/Publication/issue27p17" component={Issue27p17} />
      <Route path="/Publication/issue27p18" component={Issue27p18} />
      <Route path="/Publication/issue27p19" component={Issue27p19} />
      <Route path="/Publication/issue27p20" component={Issue27p20} />
      <Route path="/Publication/issue27p21" component={Issue27p21} />
      <Route path="/Publication/issue27p22" component={Issue27p22} />
      <Route path="/Publication/issue27p23" component={Issue27p23} />
      <Route path="/Publication/issue27p24" component={Issue27p24} />
      <Route path="/Publication/issue27p25" component={Issue27p25} />
      <Route path="/Publication/issue27p26" component={Issue27p26} />
      <Route path="/Publication/issue27p27" component={Issue27p27} />
      <Route path="/Publication/issue27p28" component={Issue27p28} />
      <Route path="/Publication/issue27p29" component={Issue27p29} />
      <Route path="/Publication/issue27p30" component={Issue27p30} />
      <Route path="/Publication/issue27p31" component={Issue27p31} />
      <Route path="/Publication/issue27p32" component={Issue27p32} />

      <Route path="/Publication/issue28p1" component={Issue28p1} />
      <Route path="/Publication/issue28p2" component={Issue28p2} />
      <Route path="/Publication/issue28p3" component={Issue28p3} />
      <Route path="/Publication/issue28p4" component={Issue28p4} />
      <Route path="/Publication/issue28p5" component={Issue28p5} />
      <Route path="/Publication/issue28p6" component={Issue28p6} />
      <Route path="/Publication/issue28p7" component={Issue28p7} />
      <Route path="/Publication/issue28p8" component={Issue28p8} />
      <Route path="/Publication/issue28p9" component={Issue28p9} />
      <Route path="/Publication/issue28p10" component={Issue28p10} />
      <Route path="/Publication/issue28p11" component={Issue28p11} />
      <Route path="/Publication/issue28p12" component={Issue28p12} />
      <Route path="/Publication/issue28p13" component={Issue28p13} />
      <Route path="/Publication/issue28p14" component={Issue28p14} />
      <Route path="/Publication/issue28p15" component={Issue28p15} />
      <Route path="/Publication/issue28p16" component={Issue28p16} />
      <Route path="/Publication/issue28p17" component={Issue28p17} />
      <Route path="/Publication/issue28p18" component={Issue28p18} />
      <Route path="/Publication/issue28p19" component={Issue28p19} />
      <Route path="/Publication/issue28p20" component={Issue28p20} />
      <Route path="/Publication/issue28p21" component={Issue28p21} />
      <Route path="/Publication/issue28p22" component={Issue28p22} />
      <Route path="/Publication/issue28p23" component={Issue28p23} />
      <Route path="/Publication/issue28p24" component={Issue28p24} />
      <Route path="/Publication/issue28p25" component={Issue28p25} />
      <Route path="/Publication/issue28p26" component={Issue28p26} />
      <Route path="/Publication/issue28p27" component={Issue28p27} />
      <Route path="/Publication/issue28p28" component={Issue28p28} />
      <Route path="/Publication/issue28p29" component={Issue28p29} />
      <Route path="/Publication/issue28p30" component={Issue28p30} />
      <Route path="/Publication/issue28p31" component={Issue28p31} />
      <Route path="/Publication/issue28p32" component={Issue28p32} />
      <Route path="/Publication/issue28p33" component={Issue28p33} />
      <Route path="/Publication/issue28p34" component={Issue28p34} />
      <Route path="/Publication/issue28p35" component={Issue28p35} />
      <Route path="/Publication/issue28p36" component={Issue28p36} />
      <Route path="/Publication/issue28p37" component={Issue28p37} />

      <Route path="/Publication/issue29p1" component={Issue29p1} />
      <Route path="/Publication/issue29p2" component={Issue29p2} />
      <Route path="/Publication/issue29p3" component={Issue29p3} />
      <Route path="/Publication/issue29p4" component={Issue29p4} />
      <Route path="/Publication/issue29p5" component={Issue29p5} />
      <Route path="/Publication/issue29p6" component={Issue29p6} />
      <Route path="/Publication/issue29p7" component={Issue29p7} />
      <Route path="/Publication/issue29p8" component={Issue29p8} />
      <Route path="/Publication/issue29p9" component={Issue29p9} />
      <Route path="/Publication/issue29p10" component={Issue29p10} />
      <Route path="/Publication/issue29p11" component={Issue29p11} />
      <Route path="/Publication/issue29p12" component={Issue29p12} />
      <Route path="/Publication/issue29p13" component={Issue29p13} />
      <Route path="/Publication/issue29p14" component={Issue29p14} />
      <Route path="/Publication/issue29p15" component={Issue29p15} />
      <Route path="/Publication/issue29p16" component={Issue29p16} />
      <Route path="/Publication/issue29p17" component={Issue29p17} />
      <Route path="/Publication/issue29p18" component={Issue29p18} />
      <Route path="/Publication/issue29p19" component={Issue29p19} />
      <Route path="/Publication/issue29p20" component={Issue29p20} />
      <Route path="/Publication/issue29p21" component={Issue29p21} />
      <Route path="/Publication/issue29p22" component={Issue29p22} />
      <Route path="/Publication/issue29p23" component={Issue29p23} />
      <Route path="/Publication/issue29p24" component={Issue29p24} />

      {/* keep the not found component at then bottom so 
      the router can successfully render all pages */}
      <Route component={NotFound} />
    </Switch>
    <MobileFooterWithContext />
  </div>
);

export default RouterContent;
