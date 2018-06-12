/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
import * as Constants from '../../common/module/constants.js';
import * as Common from '../../common/module/common.js';
import * as XPath from '../../common/module/xpath.js';
import * as ApiTabs from '../../common/module/api-tabs.js';
import * as ApiTabsListener from '../../common/module/api-tabs-listener.js';
import * as Sidebar from '../../common/module/sidebar.js';
import * as Permissions from '../../common/module/permissions.js';
import * as ContextualIdentities from '../../common/module/contextual-identities.js';
import * as MetricsData from '../../common/module/MetricsData.js';
import * as Color from './color.js';

import * as Tabs from '../../common/module/tabs.js';
import * as TabsContainer from '../../common/module/tabs-container.js';
import * as TabsUpdate from '../../common/module/tabs-update.js';
import * as TabsMove from '../../common/module/tabs-move.js';
import * as TabsOpen from '../../common/module/tabs-open.js';
import * as TabsInternalOperation from '../../common/module/tabs-internal-operation.js';
import * as TabsGroup from '../../common/module/tabs-group.js';
import * as TSTAPI from '../../common/module/tst-api.js';
import * as Bookmark from '../../common/module/bookmark.js';
import * as UserOperationBlocker from '../../common/module/user-operation-blocker.js';
import * as Cache from '../../common/module/cache.js';
import * as Tree from '../../common/module/tree.js';
import * as Commands from '../../common/module/commands.js';

import MenuUI from '../../common/MenuUI.js';
import l10n from '../../common/l10n.js';
import TabIdFixer from '../../common/TabIdFixer.js';
import TabFavIconHelper from '../../common/TabFavIconHelper.js';
import RichConfirm from '../../common/RichConfirm.js';

// Set to the global to make compatibility with other classic sources.
window.Constants = Constants;
window.configs   = Common.configs;
window.log       = Common.log;
window.dumpTab   = Common.dumpTab;
window.wait      = Common.wait;
window.nextFrame = Common.nextFrame;
window.notify    = Common.notify;
window.XPath = XPath;
window.ApiTabs = ApiTabs;
window.ApiTabsListener = ApiTabsListener;
window.Sidebar = Sidebar;
window.Permissions = Permissions;
window.ContextualIdentities = ContextualIdentities;
window.MetricsData = MetricsData;
window.Color = Color;

window.Tabs = Tabs;
window.TabsContainer = TabsContainer;
window.TabsUpdate = TabsUpdate;
window.TabsMove = TabsMove;
window.TabsOpen = TabsOpen;
window.TabsInternalOperation = TabsInternalOperation;
window.TabsGroup = TabsGroup;
window.TSTAPI = TSTAPI;
window.Bookmark = Bookmark;
window.UserOperationBlocker = UserOperationBlocker;
window.Cache = Cache;
window.Tree = Tree;
window.Commands = Commands;

window.MenuUI = MenuUI;
window.l10n = l10n;
window.TabIdFixer = TabIdFixer;
window.TabFavIconHelper = TabFavIconHelper;
window.RichConfirm = RichConfirm;
