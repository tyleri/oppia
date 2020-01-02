// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Factory for creating instances of frontend
 * story summary domain objects.
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

export class StorySummary {
  constructor(
    private _id: string,
    private _title: string,
    private _nodeCount: number,
    private _storyIsPublished: boolean
  ) {}

  getId() {
    return this._id;
  }

  getTitle() {
    return this._title;
  }

  getNodeCount() {
    return this._nodeCount;
  }

  isStoryPublished() {
    return this._storyIsPublished;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StorySummaryObjectFactory {
  createFromBackendDict(storySummaryBackendDict: any): StorySummary {
    return new StorySummary(
      storySummaryBackendDict.id,
      storySummaryBackendDict.title,
      storySummaryBackendDict.node_count,
      storySummaryBackendDict.story_is_published
    );
  }
}

angular
  .module('oppia')
  .factory(
    'StorySummaryObjectFactory',
    downgradeInjectable(StorySummaryObjectFactory)
  );
