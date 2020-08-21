
import { animate, query, stagger, state, style,  transition, trigger} from '@angular/animations';

interface AnimationSettings {
  enter?: string;
  leave?: string;
  name?: string;
}

const animationDefault = '0.5s';

export function Fade(settings?: AnimationSettings): any {
  return trigger(
      settings && settings.name  || 'fade', [
      transition(':enter', [
        style({height: 0, opacity: 0, 'overflow-y': 'hidden'}),
        animate(settings && settings.enter || animationDefault, style({height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({height: '*', opacity: 1, 'overflow-y': 'hidden'}),
        animate(settings && settings.leave || animationDefault, style({height: 0, opacity: 0}))
      ])
    ]
  );
}
