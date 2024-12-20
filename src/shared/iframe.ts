import { GroupType } from '../services/group.service';

export enum IframeEvent {
	FindGroups,
	FindGroupsSuccess,
}

type IframeEventDataFindGroups = {
	type: IframeEvent.FindGroups;
	data: {
		code: string;
		year: string;
		semester: string;
	};
};

export type IframeEventDataFindGroupsSuccess = {
	type: IframeEvent.FindGroupsSuccess;
	data: {
		groups: Record<string, GroupType>;
		params: IframeEventDataFindGroups['data'];
	};
};

export type IframeEventData =
	| IframeEventDataFindGroups
	| IframeEventDataFindGroupsSuccess;
