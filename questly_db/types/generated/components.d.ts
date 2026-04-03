import type { Schema, Struct } from '@strapi/strapi';

export interface MapMap extends Struct.ComponentSchema {
  collectionName: 'components_map_maps';
  info: {
    displayName: 'Map';
    icon: 'house';
  };
  attributes: {
    location: Schema.Attribute.Relation<'oneToOne', 'api::location.location'>;
    x: Schema.Attribute.Integer;
    y: Schema.Attribute.Integer;
    z: Schema.Attribute.Integer;
  };
}

export interface RequirementRequirement extends Struct.ComponentSchema {
  collectionName: 'components_requirement_requirements';
  info: {
    displayName: 'requirement';
    icon: 'manyToMany';
  };
  attributes: {
    character: Schema.Attribute.Relation<
      'oneToOne',
      'api::character.character'
    >;
    desc: Schema.Attribute.String;
    item: Schema.Attribute.Relation<'oneToOne', 'api::item.item'>;
    item_amount: Schema.Attribute.Integer;
    level: Schema.Attribute.Integer;
    quest: Schema.Attribute.Relation<'oneToOne', 'api::quest.quest'>;
    type: Schema.Attribute.Enumeration<
      ['level', 'quest', 'item', 'relation', 'reputation', 'other']
    >;
  };
}

export interface RewardReward extends Struct.ComponentSchema {
  collectionName: 'components_reward_rewards';
  info: {
    displayName: 'reward';
    icon: 'gift';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    items: Schema.Attribute.Relation<'oneToMany', 'api::item.item'>;
    money: Schema.Attribute.Integer;
    other: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'map.map': MapMap;
      'requirement.requirement': RequirementRequirement;
      'reward.reward': RewardReward;
    }
  }
}
