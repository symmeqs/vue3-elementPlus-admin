<script lang="ts" setup>
import { reactive } from 'vue'
import type { UploadProps } from 'element-plus/es/components/upload/src/upload'
import type { User } from './user'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

function cancel() {
  emit('update:modelValue', false)
}

const userModel: User = reactive({
  avatar: '', name: '', username: '', email: '', department: '', role: '超级管理员', id: '',
})

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  _response,
  uploadFile,
) => {
  console.log(uploadFile.raw)

  userModel.avatar = URL.createObjectURL(uploadFile.raw!)

  console.log(userModel.avatar)
}

function beforeAvatarUpload() {

}
</script>

<template>
  <div v-if="props.modelValue" class="p-5 h-[700px]">
    <div class="flex justify-between mb-6">
      <div class="font-600 ml-6 text-lg">
        编辑
      </div>
      <div class="ml-3">
        <el-button type="primary">
          保存
        </el-button>
        <el-button @click="cancel">
          取消
        </el-button>
      </div>
    </div>
    <el-form :model="userModel">
      <div class="grid lg-md:grid-cols-3 gap-xl lt-sm:grid-cols-1">
        <el-form-item class="col-span-3" label-width="70px" label="头像">
          <el-upload
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="userModel.avatar" :src="userModel.avatar" class="w-[50px] h-[50px]">
            <div v-else class="i-ep-plus" />
          </el-upload>
        </el-form-item>
        <el-form-item class="col-span-1" label-width="70px" label="姓名">
          <el-input v-model="userModel.name" />
        </el-form-item>
        <el-form-item class="col-span-1" label-width="70px" label="角色">
          <el-select v-model="userModel.role">
            <el-option label="超级管理员" value="超级管理员" />
            <el-option label="A类业务员" value="A类业务员" />
            <el-option label="B类业务员" value="B类业务员" />
          </el-select>
        </el-form-item>
        <el-form-item class="col-span-1" label-width="70px" label="部门">
          <el-select v-model="userModel.department">
            <el-option label="技术部" value="技术部" />
            <el-option label="财务部" value="财务部" />
            <el-option label="HR部" value="HR部" />
          </el-select>
        </el-form-item>
        <el-form-item class="col-span-1" label-width="70px" label="账户名">
          <el-input v-model="userModel.username" />
        </el-form-item>
        <el-form-item class="col-span-1" label-width="70px" label="邮箱">
          <el-input v-model="userModel.email" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
