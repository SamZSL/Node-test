<template>
  <div class="w-3/5 mx-auto">
    <h3>欢迎登陆</h3>
    <Form>
      <FormItem
      label="用户名"
      :label-col="{ span: 4}">
        <Input 
          placeholder="请输入用户名"
        />
      </FormItem>
      <FormItem label="密码" :label-col="{ span: 4}">
        <InputPassword 
          placeholder="请输入密码"
        />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="Login()">登陆</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script lang="ts" setup>
import { Form, Input, Button } from 'ant-design-vue'
import { router } from '@/router'
const FormItem = Form.Item
const InputPassword = Input.Password

const Login = () => {
  router.push('/main')
}
</script>