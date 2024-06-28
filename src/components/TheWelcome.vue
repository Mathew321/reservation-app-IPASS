<template>
  <div>
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Discover the Heart of Belarus at Draniki.nl</template>

      Step into our restaurant, where the rich flavors and warm hospitality of Belarusian cuisine
      await you. Savor the taste of
      <a href="" rel="noopener">draniki</a>, <a href="" rel="noopener">machanka</a>,
      <a href="" rel="noopener">borscht</a>, <a href="" rel="noopener">kolduny</a> and a lot more.
      Explore our <a href="" rel="noopener"><span style="font-weight: bold">Menu</span></a
      >.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Order online</template>
      Visit our online service <a href="" rel="noopener">here</a>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Perfect for Every Occasion</template>
      Whether you’re celebrating a special occasion or simply looking to enjoy a delicious meal,
      Draniki.nl is the perfect destination. Join us for
      <span style="font-style: italic"
        >family dinners, romantic dates, business lunches, special celebrations</span
      >.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Contact</template>
      📍 &nbsp;Location: Mooistraat 1, 2282 AA, Rijswijk <br />
      📞 Phone number: o6-111-11-11 <br />
      🌍 Media:
      <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Leave your feedback</template>
      Share your experience at Drankiki.nl
      <a href="https://forms.gle/ZDWpJtMMdAsR18VA7" target="_blank" rel="noopener">here</a>.
    </WelcomeItem>
  </div>
</template>

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>
