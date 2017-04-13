/*

Copyright 2017 Matthew Knight

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

angular.module('prizeApp', []).controller('PrizeController', ['$filter', function ($filter) {
        var prize = this;

        prize.prizes = [
            {
                "name": "Cloak of Protection",
                "url": "img/cloakofprotection.jpg",
                "description": "You gain a +1 bonus to AC and saving throws while you wear this cloak"
            },
            {
                "name": "Ironwood 3-Section Staff",
                "url": "img/ironwoodstaff.jpg",
                "description": "Magical +1 three-section staff (quarterstaff), made of Willowdale Ironwood.  Damage is 1d6+1 bludgeoning, Versatile (1d8+1)."
            },
            {
                "name": "Eyes of the Eagle",
                "url": "img/eagleeyes.jpg",
                "description": "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight, and advantage on saving throws against being Blinded. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
            },
            {
                "name": "Stone of Good Luck",
                "url": "img/goodluck.jpg",
                "description": "While this polished agate is on your person, you gain a +1 bonus to Ability Checks and saving throws."
            },
            {
                "name": "Mithral Scale Mail",
                "url": "img/mithralscalemail.jpg",
                "description": "Magical Scale Mail medium armor. AC is 14 + Dex (Max 2). Mithral is a light, flexible metal, so this armor can be worn under normal clothes. Mithral armor does not impose disadvantage on Dexterity (Stealth) checks or have a Strength requirement."
            },
            {
                "name": "Whalebone Pan Pipes",
                "url": "img/panpipes.jpg",
                "description": "Magical +1 Bard spell focus, when you use the instrument to cast a spell that causes targets to becomed charmed on a failed save, the targets have disadvantage on the saving throw. Once per day can cast one of the following spells: Barkskin, Cure Wounds, Fog Cloud.",
                "spells": [
                    {
                        "name": "Barkskin",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Barkskin"
                    },
                    {
                        "name": "Cure Wounds",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Cure_Wounds"
                    },
                    {
                        "name": "Fog Cloud",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Fog_Cloud"
                    }
                ]
            },
            {
                "name": "Ironwood Lyre",
                "url": "img/ironwoodlyre.jpg",
                "description": "Magical +1 Bard spell focus, when you use the instrument to cast a spell that causes targets to becomed charmed on a failed save, the targets have disadvantage on the saving throw. Once per day can cast one of the following spells: Entangle, Faerie Fire, Shillelagh, Speak with Animals.",
                "spells": [
                    {
                        "name": "Entangle",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Entangle"
                    },
                    {
                        "name": "Faerie Fire",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Faerie_Fire"
                    },
                    {
                        "name": "Shillelagh",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Shillelagh"
                    },
                    {
                        "name": "Speak with Animals",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Speak_with_Animals"
                    }
                ]
            },
            {
                "name": "Rod of the Pact Keeper",
                "url": "img/pactkeeper.jpg",
                "description": "Magical +1 Warlock spell focus, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest."
            },
            {
                "name": "Masterwork Dueling Rapier",
                "url": "img/duelingrapier.jpg",
                "description": "Magical +1 rapier, made of shining enchanted silver. Once per day can can cast Compelled Duel, saving throw is DC 13 Wisdom. Martial and Finesse type weapon, damage is 1d8+1 piercing.",
                "spells": [
                    {
                        "name": "Compelled Duel",
                        "url": "http://engl393-dnd5th.wikia.com/wiki/Compelled_Duel"
                    }
                ]
            },
            {
                "name": "Boots of Elvenkind",
                "url": "img/elvenkind.jpg",
                "description": "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
            },
            {
                "name": "Boots of Striding and Springing",
                "url": "img/stridingandspringing.jpg",
                "description": "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing Heavy Armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining Movement would allow."
            },
            {
                "name": "Gloves of Swimming and Climbing",
                "url": "img/swimmingandclimbing.jpg",
                "description": "While wearing these gloves, climbing and swimming don't cost you extra Movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim."
            },
            {
                "name": "Frostweave Robe",
                "url": "img/masterworkrobe.jpg",
                "description": "These robes are considered magical armor.  While wearing these robes you have resistance to frost damage, ignore difficult terrain created by ice or snow, and can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection."
            },
            {
                "name": "Ironwood Bow",
                "url": "img/ironwoodbow.jpg",
                "description": "Magical +1 longbow, made of Willowdale Ironwood.  Damage is 1d8+1 piercing, range 150/600, heavy, two-handed."
            },
            {
                "name": "Basilisk Leather Armor",
                "url": "img/basiliskleather.jpg",
                "description": "Magical +1 leather armor, light armor, AC is 12 + Dex Modifier.  Made of basilisk leather, the wearer has advantage on saving throws against being petrified."
            }
        ];

        prize.selectPrize = function(selectedPrize) {
            prize.prizes.forEach(function (item) {
                item.isSelected = false;
            });

            prize.selectedPrize = selectedPrize;
            prize.selectedPrize.isSelected = true;
        };

        prize.unselectPrize = function(selectedPrize) {
            prize.selectedPrize = undefined;

            prize.prizes.forEach(function (item) {
                item.isSelected = false;
            });
        };
    }]);
