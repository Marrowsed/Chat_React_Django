from django.contrib.auth.models import User
from django.db import models


class Contact(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    state = models.BooleanField(default='false')
    date_joined = models.DateTimeField(auto_now_add=True)
    about = models.CharField(max_length=200)
    birthday = models.DateField()
    photo = models.ImageField(upload_to='profile')

    @property
    def get_messages(self):
        c = Contact()
        total = c.message_set.all()
        return total

    @property
    def get_unread_messages(self):
        c = Contact()
        total = c.message_set.filter(state='false')
        return total

    @property
    def get_unread_messages_from(self, *args):
        c = Contact()
        total = c.message_set.filter(state='false', to_user=args)
        return total

    @property
    def get_messages_from(self, *args):
        c = Contact()
        total = c.message_set.filter(to_user=args)
        return total

    def __str__(self):
        return f"{self.name}"


class Message(models.Model):
    contact = models.ForeignKey(Contact, on_delete=models.SET_NULL, null=True, related_name="you")
    other_contact = models.ForeignKey(Contact, on_delete=models.SET_NULL, null=True, related_name="contact")
    text = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    state = models.BooleanField(default='false')

    def __str__(self):
        return f"{self.text[0:50]}"