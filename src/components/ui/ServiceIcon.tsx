import React from 'react';
import {
  AudioWaveformIcon,
  BabyIcon,
  BookOpenCheckIcon,
  ClockIcon,
  EarIcon,
  HandIcon,
  HeartHandshakeIcon,
  MessagesSquareIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon } from
'lucide-react';

export type IconName =
'ear' |
'speech' |
'hand' |
'waves' |
'book' |
'baby' |
'users' |
'target' |
'heart' |
'chart' |
'clock';

const map: Record<IconName, React.ComponentType<{className?: string;strokeWidth?: number;}>> = {
  ear: EarIcon,
  speech: MessagesSquareIcon,
  hand: HandIcon,
  waves: AudioWaveformIcon,
  book: BookOpenCheckIcon,
  baby: BabyIcon,
  users: UsersIcon,
  target: TargetIcon,
  heart: HeartHandshakeIcon,
  chart: TrendingUpIcon,
  clock: ClockIcon
};

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function ServiceIcon({ name, className = 'h-6 w-6', strokeWidth = 1.75 }: Props) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={strokeWidth} />;
}