import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';
import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';
import { SpeedcontrolAdditionsConstructor, SpeedcontrolAdditionsInstance, Assets } from '../nodecg/speedcontrol-additions';
import { TwitterWidgetConstructor, TwitterWidgetInstance } from '../nodecg/twitter';
import { SpotifyWidgetConstructor, SpotifyWidgetInstance } from '../nodecg/spotify';
import { Configschema } from '../nodecg/generated/configschema';

type BundleNodecgInstance = CreateNodecgInstance<
'nodecg-pgrf',
Configschema,
{
	'assets:background': Assets;
	'assets:ome-logo': Assets;
	'assets:pgrf-logo': Assets;
},
{}
>;

type BundleNodecgConstructor = CreateNodecgConstructor<
'nodecg-pgrf',
Configschema,
{
	'assets:background': Assets;
	'assets:logo': Assets;
	'assets:pgrf-logo': Assets;
},
{}
>;

declare global {
  const nodecg: BundleNodecgInstance & SpeedcontrolInstance & SpeedcontrolAdditionsInstance & TwitterWidgetInstance & SpotifyWidgetInstance;

  const NodeCG: BundleNodecgConstructor & SpeedcontrolConstructor & SpeedcontrolAdditionsConstructor & TwitterWidgetConstructor & SpotifyWidgetConstructor;
}
