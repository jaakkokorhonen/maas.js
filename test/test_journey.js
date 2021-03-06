/**
 * maas.js - Client for maas-server
 * Copyright (C) 2015 haphut <haphut@gmail.com>
 *
 * This file is part of maas.js.
 *
 * maas.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * maas.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with maas.js.  If not, see <http://www.gnu.org/licenses/>.
 */

import should from 'should'; // jshint ignore:line

import {createJourneyId} from '../src/journey';

describe('createJourneyId', () => {
  const id = createJourneyId();

  it('returns a String', () => {
    id.should.be.String; // jshint ignore:line
  });

  it('returns something of length 36', () => {
    id.should.have.length(36);
  });
});
