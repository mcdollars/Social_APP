import React, { useState } from "react";
import { 
  IonList,
  IonItem,
  IonLabel,
  IonModal
} from "@ionic/react";

import Notifications from '../pages/Notifications'

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  const [openNotifications, setOpenNotifications] = useState<boolean>(false)

  const handleNotification = () => {
    setTimeout(() => {
      setOpenNotifications(true)
    }, 800)
  }

  return (
    <>
      <div className="w-full shadow-md relative pt-8 pb-3 rounded-b-xl bg-white">
        <img src="assets/images/horz-logo.png" className="mx-auto" alt="logo" />
        <div className="absolute bottom-0 right-0 -translate-y-1/2 -translate-x-full">
          <img src="assets/images/home/notifs-icon.png" alt="" 
            onClick={handleNotification}
          />
        </div>
      </div>
      <IonModal isOpen={openNotifications}>
        <Notifications setOpen={setOpenNotifications}/>
      </IonModal>
    </>
  );
};

export default HomeHeader;
