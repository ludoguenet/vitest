import { describe, it, expect, test, vi } from 'vitest';

import { flushPromises, mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
import axios from "axios";

describe('API', () => {
  const mockLists = {
    data: [
      { id: 1, name: 'truc' },
      { id: 2, name: 'bidule' },
    ],
  };

  vi.spyOn(axios, 'get').mockResolvedValue(mockLists);

  it('can get users', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest', name: 'Nord Coders', age: 30 } });

    // await wrapper.get('button').trigger('click');

    expect(axios.get).toHaveBeenCalledOnce();

    await flushPromises();

    const users = wrapper.findAll('[data-test="user"]');
    expect(users).toHaveLength(2);
    expect(wrapper.text()).toContain('bidule');
  });
})

describe('component', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest', name: 'Nord Coders', age: 30 } });
    expect(wrapper.text()).toContain('Hello Vitest');
    expect(wrapper.vm.age).toBe(30);
    expect(wrapper.vm.name).not.toBeNull();
  });
});

