/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BASE_PATH, BACKEND_BASE_PATH } from '../../base_constants';

/**
 *****************************
 URL CONSTANTS
 *****************************
 */

const BASE_MLC_PATH = BASE_PATH + '/app/ml-commons-dashboards';

export const MLC_URL = {
  ROOT: BASE_MLC_PATH + '/',
  OVERVIEW: BASE_MLC_PATH + '/overview',
};

export const MLC_API_BASE = `${BACKEND_BASE_PATH}/_plugins/_ml`;

export const MLC_API = {
  MODEL_BASE: `${MLC_API_BASE}/models`,
  MODEL_UPLOAD: `${MLC_API_BASE}/models/_upload`,
  TASK_BASE: `${MLC_API_BASE}/tasks`,
};

const BASE_MLC_DASHBOARD_API = BASE_PATH + '/api/ml-commons';

export const MLC_DASHBOARD_API = {
  DEPLOYED_MODEL_PROFILE: `${BASE_MLC_DASHBOARD_API}/profile/deployed-model/:modelID`,
};
