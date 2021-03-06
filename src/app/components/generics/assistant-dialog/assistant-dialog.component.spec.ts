import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantDialogComponent } from './assistant-dialog.component'

describe('AssistantDialogComponent', () => {
   let component: AssistantDialogComponent
   let fixture: ComponentFixture<AssistantDialogComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantDialogComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantDialogComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
