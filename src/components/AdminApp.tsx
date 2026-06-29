"use client";

import { Admin, Resource } from "react-admin";
import { dataProvider } from "@/lib/ra-data-provider";
import { authProvider } from "@/lib/ra-auth-provider";

import { EventList } from "./ra/EventList";
import { EventEdit } from "./ra/EventEdit";
import { EventCreate } from "./ra/EventCreate";

import { SpeakerList } from "./ra/SpeakerList";
import { SpeakerEdit } from "./ra/SpeakerEdit";
import { SpeakerCreate } from "./ra/SpeakerCreate";

import { RoomList } from "./ra/RoomList";
import { RoomCreate } from "./ra/RoomCreate";
import { RoomEdit } from "@/components/ra/RoomEdit";

import { SessionList } from "./ra/SessionList";
import { SessionEdit } from "./ra/SessionEdit";
import { SessionCreate } from "./ra/SessionCreate";

import { UserList } from "./ra/UserList";
import { UserEdit } from "./ra/UserEdit";
import { UserCreate } from "./ra/UserCreate";

import { QuestionList } from "./ra/QuestionList";
import { QuestionEdit } from "./ra/QuestionEdit";
import { Dashboard } from "./ra/Dashboard";
import { MyLayout } from "./ra/MyLayout";
import { appTheme } from "./theme";

import EventIcon from "@mui/icons-material/Event";
import MicIcon from "@mui/icons-material/Mic";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default function AdminApp() {
    return (
        <Admin
            dashboard={Dashboard}
            dataProvider={dataProvider}
            authProvider={authProvider}
            layout={MyLayout}
            title="MyVent Admin"
            theme={appTheme as any}
        >
            <Resource
                name="events"
                list={EventList}
                edit={EventEdit}
                create={EventCreate}
                icon={EventIcon}
                options={{ label: "Événements" }}
            />
            <Resource
                name="speakers"
                list={SpeakerList}
                edit={SpeakerEdit}
                create={SpeakerCreate}
                icon={MicIcon}
                options={{ label: "Speakers" }}
            />
            <Resource
                name="rooms"
                list={RoomList}
                create={RoomCreate}
                edit={RoomEdit}
                icon={MeetingRoomIcon}
                options={{ label: "Salles" }}
            />
            <Resource
                name="sessions"
                list={SessionList}
                edit={SessionEdit}
                create={SessionCreate}
                icon={CalendarMonthIcon}
                options={{ label: "Sessions" }}
            />
            <Resource
                name="users"
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                icon={PeopleIcon}
                options={{ label: "Utilisateurs" }}
            />
            <Resource
                name="questions"
                list={QuestionList}
                edit={QuestionEdit}
                icon={QuestionAnswerIcon}
                options={{ label: "Questions" }}
            />
        </Admin>
    );
}