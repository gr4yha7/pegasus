<template>
  <div class="container mx-auto py-10">
    <div
      class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
    >
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://api.adorable.io/avatars/196/abott@adorable.png"
          alt
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">Jane Doe</p>
            <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
          </div>
          <div class="flex flex-wrap">
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
            >Call</button>
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
            >Message</button>
          </div>
        </div>
      </div>

    </div>
    <div class="flex flex-col mx-auto mt-4 max-w-sm border rounded-lg shadow-sm">
      <div class="rounded-lg text-center bg-blue-500 hover:bg-white p-4">
        <p class="text-semibold text-white hover:text-blue-500">
          {{ company }}
        </p>
      </div>
    </div>
    <ul>
      <li v-for="staff in staffs" v-bind:key="staff.key">
        {{staff.name}}
        {{staff.phone}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    company: 'Investlift',
    staffs: [
      {
        key: 1,
        name: 'Denver',
        phone: '01-229'
      },
      {
        key: 2,
        name: 'Moscow',
        phone: '01-389'
      },
      {
        key: 3,
        name: 'Berlin',
        phone: '01-587'
      }
    ]
  })
}
</script>
