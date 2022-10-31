import Account from "../pages/Account";
import Support from "../pages/Support";
import Tutorial from "../pages/Tutorial";
import ViewAlbum from "../pages/ViewAlbum";
import Map from "../pages/Map";
import MapAlbum from "../pages/MapAlbum";
import MapAlbumPhoto from "../pages/MapAlbumPhoto";
import Tips from "../pages/Tips";
import SelectCategory from "../pages/SelectCategory";
import Discovery from "../pages/Discovery";
import CategorySearch from "../pages/CategorySearch";
import Groups from "../pages/Groups";
import MyGroups from "../pages/MyGroups";
import CreateGroup from "../pages/CreateGroup";
import InviteParticipants from "../pages/InviteParticipants";
import GroupDiscover from "../pages/GroupDiscover";
import GroupFeed from "../pages/GroupFeed";
import GroupMapExperience from "../pages/GroupMapExperience";
import GroupExperience from "../pages/GroupExperience";
import GroupNoExperience from "../pages/GroupNoExperience";
import GroupExperienceList from "../pages/GroupExperienceList";
import PlanExperience from "../pages/PlanExperience";
import CreatePlanExperience from "../pages/CreatePlanExperience";
import AdvanceSettings from "../pages/AdvanceSettings";
import ExperienceMap from "../pages/ExperienceMap";
import SearchPlaces from "../pages/SearchPlaces";
import ExperienceDetails from "../pages/ExperienceDetails";
import ExperienceSuggestions from "../pages/ExperienceSuggestions";
import ExperienceSaved from "../pages/ExperienceSaved";
import Experiences from "../pages/Experiences";
import CreateExperience from "../pages/CreateExperience";
import CreateExperienceMap from "../pages/CreateExperienceMap";
import CreateExperienceActivity from "../pages/CreateExperienceActivity";
import CloseCreateExperience from "../pages/CloseCreateExperience";
import AddQuickTips from "../pages/AddQuickTips";
import Portfolio from "../pages/Portfolio";
import Settings from "../pages/Settings";
import MyExperience from "../pages/MyExperience";
import UserProfile from "../pages/UserProfile";
import UserExperience from "../pages/UserExperience";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import ExperienceMapMostPopular from "../pages/ExperienceMapMostPopular";
// import MainTabs from "../pages/MainTabs";

const routes = [
  // { path: "/tabs", render: () => <Maintabs />, exact: true },
  { path: "/account", component: Account, exact: true },
  { path: "/support", component: Support, exact: true },
  { path: "/tutorial", component: Tutorial, exact: true },
  { path: "/view-album", component: ViewAlbum, exact: true },
  { path: "/map", component: Map, exact: true },
  { path: "/map-album", component: MapAlbum, exact: true },
  { path: "/map-album-photo", component: MapAlbumPhoto, exact: true },
  { path: "/tips", component: Tips, exact: true },
  { path: "/select-category", component: SelectCategory, exact: true },
  { path: "/discovery/:type", component: Discovery, exact: true },
  { path: "/category-search", component: CategorySearch, exact: true },
  { path: "/groups", component: Groups, exact: true },
  { path: "/my-groups", component: MyGroups, exact: true },
  { path: "/groups-create", component: CreateGroup, exact: true },
  { path: "/invite-participant", component: InviteParticipants, exact: true },
  {
    path: "/group-map-experience",
    component: GroupMapExperience,
    exact: true,
  },
  { path: "/group-discover", component: GroupDiscover, exact: true },
  { path: "/group-feed", component: GroupFeed, exact: true },
  { path: "/group-experience", component: GroupExperience, exact: true },
  { path: "/group-no-experience", component: GroupNoExperience, exact: true },
  {
    path: "/group-experience-list",
    component: GroupExperienceList,
    exact: true,
  },
  { path: "/plan-experience", component: PlanExperience, exact: true },
  {
    path: "/create-plan-experience",
    component: CreatePlanExperience,
    exact: true,
  },
  { path: "/advance-settings", component: AdvanceSettings, exact: true },
  { path: "/experience-map", component: ExperienceMap, exact: true },
  { path: "/search-places/:type", component: SearchPlaces, exact: true },
  { path: "/experience-details", component: ExperienceDetails, exact: true },
  {
    path: "/experience-suggestions",
    component: ExperienceSuggestions,
    exact: true,
  },
  { path: "/experience-saved", component: ExperienceSaved, exact: true },
  { path: "/experiences", component: Experiences, exact: true },
  { path: "/create-experiences", component: CreateExperience, exact: true },
  {
    path: "/popular-experiences-map",
    component: ExperienceMapMostPopular,
    exact: true,
  },
  {
    path: "/create-experiences-map",
    component: CreateExperienceMap,
    exact: true,
  },
  {
    path: "/create-experiences-map/:id",
    component: CreateExperienceMap,
    exact: true,
  },
  {
    path: "/create-experiences-activity",
    component: CreateExperienceActivity,
    exact: true,
  },
  {
    path: "/close-create-experiences",
    component: CloseCreateExperience,
    exact: true,
  },
  { path: "/add-quick-tips", component: AddQuickTips, exact: true },
  { path: "/portfolio", component: Portfolio, exact: true },
  { path: "/settings", component: Settings, exact: true },
  { path: "/my-experiences", component: MyExperience, exact: true },
  { path: "/user-profile", component: UserProfile, exact: true },
  { path: "/user-experience", component: UserExperience, exact: true },
  { path: "/notifications", component: Notifications, exact: true },
  { path: "/messages", component: Messages, exact: true },
  // {
  //   path:"/logout"
  //   render={() => {
  //     return (
  //       <RedirectToLogin
  //         setIsLoggedIn={setIsLoggedIn}
  //         setUsername={setUsername}
  //       ,exact:true},
  //     );
  //   }
  // ,exact:true},
];

export default routes;
